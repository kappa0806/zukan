"""Generate PNG icons from SVG for PWA manifest."""
import struct
import zlib
import os

def create_png(width, height, bg_color=(76, 175, 80)):
    """Create a simple PNG icon with green background and text-like pattern."""
    r, g, b = bg_color

    # Create pixel data (RGBA)
    pixels = []
    cx, cy = width // 2, height // 2
    radius = min(width, height) * 0.42
    corner_r = min(width, height) * 0.15

    for y in range(height):
        row = [0]  # filter byte
        for x in range(width):
            # Rounded rect check
            dx = abs(x - cx) - (cx - corner_r)
            dy = abs(y - cy) - (cy - corner_r)
            if dx > 0 and dy > 0:
                in_rect = (dx * dx + dy * dy) <= corner_r * corner_r
            else:
                in_rect = True

            if in_rect:
                # Simple book icon in center
                bx = (x - cx) / (width * 0.3)
                by = (y - cy) / (height * 0.3)
                if abs(bx) < 1 and -0.8 < by < 0.8:
                    # Book shape
                    if abs(bx) < 0.05:
                        # Spine
                        row.extend([255, 255, 255, 230])
                    elif abs(by) < 0.7 and abs(bx) < 0.9:
                        # Pages
                        row.extend([255, 255, 255, 180])
                    else:
                        row.extend([r, g, b, 255])
                else:
                    row.extend([r, g, b, 255])
            else:
                row.extend([0, 0, 0, 0])
        pixels.append(bytes(row))

    raw = b''.join(pixels)

    def chunk(chunk_type, data):
        c = chunk_type + data
        crc = struct.pack('>I', zlib.crc32(c) & 0xffffffff)
        return struct.pack('>I', len(data)) + c + crc

    signature = b'\x89PNG\r\n\x1a\n'
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    idat = zlib.compress(raw, 9)

    return signature + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')

os.makedirs('icons', exist_ok=True)

for size in [192, 512]:
    data = create_png(size, size)
    path = f'icons/icon-{size}.png'
    with open(path, 'wb') as f:
        f.write(data)
    print(f'Created {path} ({len(data)} bytes)')
