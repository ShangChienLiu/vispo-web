import { writeFileSync } from 'fs';
import { Buffer } from 'buffer';
import { createHash } from 'crypto';
import zlib from 'zlib';

const IMAGES_DIR = '/Users/shangchienliu/Github-local/video_tutor/vispo-web/public/images';

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii');
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crcData = Buffer.concat([typeBuffer, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function createPNG(width, height, r1, g1, b1, r2, g2, b2) {
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;  // bit depth
  ihdrData[9] = 2;  // color type (RGB)
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = createChunk('IHDR', ihdrData);

  // IDAT chunk - create gradient image data
  const rawData = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 3);
    rawData[rowOffset] = 0; // filter: none
    const t = y / (height - 1);
    for (let x = 0; x < width; x++) {
      const pixOffset = rowOffset + 1 + x * 3;
      rawData[pixOffset] = Math.round(r1 + (r2 - r1) * t);
      rawData[pixOffset + 1] = Math.round(g1 + (g2 - g1) * t);
      rawData[pixOffset + 2] = Math.round(b1 + (b2 - b1) * t);
    }
  }
  const compressed = zlib.deflateSync(rawData);
  const idat = createChunk('IDAT', compressed);

  // IEND chunk
  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

const images = [
  { name: 'hero-creature.png', w: 500, h: 500, c1: [42, 27, 78], c2: [74, 40, 130] },
  { name: 'parallax-bg.png', w: 1440, h: 560, c1: [15, 20, 45], c2: [30, 15, 50] },
  { name: 'lumis.png', w: 300, h: 360, c1: [30, 25, 20], c2: [60, 45, 25] },
  { name: 'blazek.png', w: 300, h: 360, c1: [50, 15, 5], c2: [80, 30, 10] },
  { name: 'nuzzle.png', w: 300, h: 360, c1: [5, 20, 30], c2: [10, 50, 55] },
  { name: 'cta-creature.png', w: 400, h: 400, c1: [10, 15, 50], c2: [20, 30, 80] },
];

for (const img of images) {
  const png = createPNG(img.w, img.h, ...img.c1, ...img.c2);
  const path = `${IMAGES_DIR}/${img.name}`;
  writeFileSync(path, png);
  console.log(`Created ${path} (${png.length} bytes)`);
}
