/**
 * Asteroids Vector Font Library for Phaser
 * Based on the Asteroids font from https://github.com/osresearch/vst (teensyv/asteroids_font.c)
 *
 * Each glyph is defined as an array of 8-bit commands:
 *   - A packed point is stored as: (x << 4) | (y) where x and y are 4-bit values.
 *   - FONT_UP (0xFE) indicates a “pen up” command (move without drawing).
 *   - FONT_LAST (0xFF) marks the end of the glyph.
 *
 * The coordinate system is defined on an 8×12 grid.
 */

const FONT_UP   = 0xFE;
const FONT_LAST = 0xFF;

function P(x, y) {
  // Pack x (high nibble) and y (low nibble) into one byte.
  return ((x & 0xF) << 4) | (y & 0xF);
}

/**
 * The Asteroids font data.
 * The keys are the characters, and the value is an array of commands.
 * (The original C code indexes the glyphs from 0x20 (space) upward.)
 */
const asteroidsFont = {
  "0": [ P(0,0), P(8,0), P(8,12), P(0,12), P(0,0), P(8,12), FONT_LAST ],
  "1": [ P(4,0), P(4,12), P(3,10), FONT_LAST ],
  "2": [ P(0,12), P(8,12), P(8,7), P(0,5), P(0,0), P(8,0), FONT_LAST ],
  "3": [ P(0,12), P(8,12), P(8,0), P(0,0), FONT_UP, P(0,6), P(8,6), FONT_LAST ],
  "4": [ P(0,12), P(0,6), P(8,6), FONT_UP, P(8,12), P(8,0), FONT_LAST ],
  "5": [ P(0,0), P(8,0), P(8,6), P(0,7), P(0,12), P(8,12), FONT_LAST ],
  "6": [ P(0,12), P(0,0), P(8,0), P(8,5), P(0,7), FONT_LAST ],
  "7": [ P(0,12), P(8,12), P(8,6), P(4,0), FONT_LAST ],
  "8": [ P(0,0), P(8,0), P(8,12), P(0,12), P(0,0), FONT_UP, P(0,6), P(8,6) ],
  "9": [ P(8,0), P(8,12), P(0,12), P(0,7), P(8,5), FONT_LAST ],
  " ": [ FONT_LAST ],
  ".": [ P(3,0), P(4,0), FONT_LAST ],
  ",": [ P(2,0), P(4,2), FONT_LAST ],
  "-": [ P(2,6), P(6,6), FONT_LAST ],
  "+": [ P(1,6), P(7,6), FONT_UP, P(4,9), P(4,3), FONT_LAST ],
  "!": [ P(4,0), P(3,2), P(5,2), P(4,0), FONT_UP, P(4,4), P(4,12), FONT_LAST ],
  "#": [ P(0,4), P(8,4), P(6,2), P(6,10), P(8,8), P(0,8), P(2,10), P(2,2) ],
  "^": [ P(2,6), P(4,12), P(6,6), FONT_LAST ],
  "=": [ P(1,4), P(7,4), FONT_UP, P(1,8), P(7,8), FONT_LAST ],
  "*": [ P(0,0), P(4,12), P(8,0), P(0,8), P(8,8), P(0,0), FONT_LAST ],
  "_": [ P(0,0), P(8,0), FONT_LAST ],
  "/": [ P(0,0), P(8,12), FONT_LAST ],
  "\\": [ P(0,12), P(8,0), FONT_LAST ],
  "@": [ P(8,4), P(4,0), P(0,4), P(0,8), P(4,12), P(8,8), P(4,4), P(3,6) ],
  "$": [ P(6,2), P(2,6), P(6,10), FONT_UP, P(4,12), P(4,0), FONT_LAST ],
  "&": [ P(8,0), P(4,12), P(8,8), P(0,4), P(4,0), P(8,4), FONT_LAST ],
  "[": [ P(6,0), P(2,0), P(2,12), P(6,12), FONT_LAST ],
  "]": [ P(2,0), P(6,0), P(6,12), P(2,12), FONT_LAST ],
  "(": [ P(6,0), P(2,4), P(2,8), P(6,12), FONT_LAST ],
  ")": [ P(2,0), P(6,4), P(6,8), P(2,12), FONT_LAST ],
  "{": [ P(6,0), P(4,2), P(4,10), P(6,12), FONT_UP, P(2,6), P(4,6), FONT_LAST ],
  "}": [ P(4,0), P(6,2), P(6,10), P(4,12), FONT_UP, P(6,6), P(8,6), FONT_LAST ],
  "%": [ P(0,0), P(8,12), FONT_UP, P(2,10), P(2,8), FONT_UP, P(6,4), P(6,2) ],
  "<": [ P(6,0), P(2,6), P(6,12), FONT_LAST ],
  ">": [ P(2,0), P(6,6), P(2,12), FONT_LAST ],
  "|": [ P(4,0), P(4,5), FONT_UP, P(4,6), P(4,12), FONT_LAST ],
  ":": [ P(4,9), P(4,7), FONT_UP, P(4,5), P(4,3), FONT_LAST ],
  ";": [ P(4,9), P(4,7), FONT_UP, P(4,5), P(1,2), FONT_LAST ],
  "\"": [ P(2,10), P(2,6), FONT_UP, P(6,10), P(6,6), FONT_LAST ],
  "'": [ P(2,6), P(6,10), FONT_LAST ],
  "`": [ P(2,10), P(6,6), FONT_LAST ],
  "~": [ P(0,4), P(2,8), P(6,4), P(8,8), FONT_LAST ],
  "?": [ P(0,8), P(4,12), P(8,8), P(4,4), FONT_UP, P(4,1), P(4,0), FONT_LAST ],
  "A": [ P(0,0), P(0,8), P(4,12), P(8,8), P(8,0), FONT_UP, P(0,4), P(8,4) ],
  "B": [ P(0,0), P(0,12), P(4,12), P(8,10), P(4,6), P(8,2), P(4,0), P(0,0) ],
  "C": [ P(8,0), P(0,0), P(0,12), P(8,12), FONT_LAST ],
  "D": [ P(0,0), P(0,12), P(4,12), P(8,8), P(8,4), P(4,0), P(0,0), FONT_LAST ],
  "E": [ P(8,0), P(0,0), P(0,12), P(8,12), FONT_UP, P(0,6), P(6,6), FONT_LAST ],
  "F": [ P(0,0), P(0,12), P(8,12), FONT_UP, P(0,6), P(6,6), FONT_LAST ],
  "G": [ P(6,6), P(8,4), P(8,0), P(0,0), P(0,12), P(8,12), FONT_LAST ],
  "H": [ P(0,0), P(0,12), FONT_UP, P(0,6), P(8,6), FONT_UP, P(8,12), P(8,0) ],
  "I": [ P(0,0), P(8,0), FONT_UP, P(4,0), P(4,12), FONT_UP, P(0,12), P(8,12) ],
  "J": [ P(0,4), P(4,0), P(8,0), P(8,12), FONT_LAST ],
  "K": [ P(0,0), P(0,12), FONT_UP, P(8,12), P(0,6), P(6,0), FONT_LAST ],
  "L": [ P(8,0), P(0,0), P(0,12), FONT_LAST ],
  "M": [ P(0,0), P(0,12), P(4,8), P(8,12), P(8,0), FONT_LAST ],
  "N": [ P(0,0), P(0,12), P(8,0), P(8,12), FONT_LAST ],
  "O": [ P(0,0), P(0,12), P(8,12), P(8,0), P(0,0), FONT_LAST ],
  "P": [ P(0,0), P(0,12), P(8,12), P(8,6), P(0,5), FONT_LAST ],
  "Q": [ P(0,0), P(0,12), P(8,12), P(8,4), P(0,0), FONT_UP, P(4,4), P(8,0) ],
  "R": [ P(0,0), P(0,12), P(8,12), P(8,6), P(0,5), FONT_UP, P(4,5), P(8,0) ],
  "S": [ P(0,2), P(2,0), P(8,0), P(8,5), P(0,7), P(0,12), P(6,12), P(8,10) ],
  "T": [ P(0,12), P(8,12), FONT_UP, P(4,12), P(4,0), FONT_LAST ],
  "U": [ P(0,12), P(0,2), P(4,0), P(8,2), P(8,12), FONT_LAST ],
  "V": [ P(0,12), P(4,0), P(8,12), FONT_LAST ],
  "W": [ P(0,12), P(2,0), P(4,4), P(6,0), P(8,12), FONT_LAST ],
  "X": [ P(0,0), P(8,12), FONT_UP, P(0,12), P(8,0), FONT_LAST ],
  "Y": [ P(0,12), P(4,6), P(8,12), FONT_UP, P(4,6), P(4,0), FONT_LAST ],
  "Z": [ P(0,12), P(8,12), P(0,0), P(8,0), FONT_UP, P(2,6), P(6,6), FONT_LAST ]
};

/**
 * AsteroidsFontRenderer
 *
 * A Phaser‑compatible class for drawing text using the Asteroids vector font.
 *
 * Options:
 *   glyphWidth  – width (in pixels) allocated for each character (default: 40)
 *   glyphHeight – height (in pixels) of each character (default: 60)
 *   lineWidth   – stroke thickness (default: 2)
 *   color       – stroke color (hex, default: 0xffffff)
 *
 * The built‑in coordinates (0–8 in x and 0–12 in y) are scaled by:
 *    scaleX = glyphWidth / 8
 *    scaleY = glyphHeight / 12
 */
class AsteroidsFontRenderer {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.glyphWidth = options.glyphWidth || 40;
    this.glyphHeight = options.glyphHeight || 60;
    this.lineWidth = options.lineWidth || 2;
    this.color = options.color || 0xffffff;
    this.letterSpacing = options.letterSpacing || 0; // New: configurable letter spacing
    this.scale = options.scale || 1.0; // New: overall scale factor
    
    // Calculate scaling factors from the font grid (8 x 12)
    this.scaleX = (this.glyphWidth * this.scale) / 8;
    this.scaleY = (this.glyphHeight * this.scale) / 12;
  }

  /**
   * Draws text at (x, y) using the Asteroids font.
   * Returns a Phaser Graphics object with the drawn text.
   *
   * @param {number} x - starting x coordinate.
   * @param {number} y - starting y coordinate.
   * @param {string} text - the text string to draw.
   * @returns {Phaser.GameObjects.Graphics} The graphics object.
   */
  drawText(x, y, text) {
    const graphics = this.scene.add.graphics();
    graphics.lineStyle(this.lineWidth, this.color, 1);
    
    let cursorX = x;
    // Loop over each character in the string in reverse to draw right-to-left
    const chars = Array.from(text).reverse();
    for (let char of chars) {
      // Look up the glyph data; if not found, use a blank glyph
      const glyph = asteroidsFont[char] || [FONT_LAST];
      let penUp = true; // start each glyph with pen up
      let firstPoint = true;
      let lastX = 0, lastY = 0;
      
      // For each command in the glyph array
      for (let cmd of glyph) {
        if (cmd === FONT_LAST) {
          break; // End of glyph
        }
        if (cmd === FONT_UP) {
          penUp = true;
          continue;
        }
        
        // Decode the packed point
        const pointX = ((cmd >> 4) & 0xF) * this.scaleX;
        // Flip Y coordinates (12 - y to invert)
        const pointY = (12 - (cmd & 0xF)) * this.scaleY;
        
        if (penUp || firstPoint) {
          graphics.moveTo(cursorX + pointX, y + pointY);
          penUp = false;
          firstPoint = false;
          lastX = pointX;
          lastY = pointY;
        } else {
          graphics.lineTo(cursorX + pointX, y + pointY);
          lastX = pointX;
          lastY = pointY;
        }
      }
      
      // Advance cursor for monospaced font (including letter spacing)
      cursorX -= (this.glyphWidth * this.scale + this.letterSpacing);
    }
    
    graphics.strokePath();
    return graphics;
  }
}

// Example usage in a Phaser scene:
/*
class MyScene extends Phaser.Scene {
  preload() {
    // No asset loading needed since the font data is built in.
  }
  create() {
    // Create an instance of the font renderer.
    const fontRenderer = new AsteroidsFontRenderer(this, {
      glyphWidth: 40,
      glyphHeight: 60,
      lineWidth: 2,
      color: 0x00ff00
    });
    // Draw a sample text.
    fontRenderer.drawText(50, 50, "HELLO WORLD! 123");
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MyScene
};

const game = new Phaser.Game(config);
*/

export { AsteroidsFontRenderer, asteroidsFont };