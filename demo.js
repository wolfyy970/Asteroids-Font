import { AsteroidsFontRenderer } from 'asteroids-font.js';

class DemoScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DemoScene' });
        this.currentText = 'ASTEROIDS FONT';
        this.graphics = null;
    }

    create() {
        // Create the font renderer
        this.fontRenderer = new AsteroidsFontRenderer(this, {
            glyphWidth: 30,  // Slightly smaller to fit more characters
            glyphHeight: 45,
            lineWidth: 2,
            color: 0x00ff00,  // Classic green color
            letterSpacing: 10, // Add some space between letters
            scale: 1.0 // Overall scale factor
        });

        // Initial render
        this.renderText(this.currentText);

        // Set up input handling
        const input = document.getElementById('text-input');
        input.addEventListener('input', (e) => {
            this.currentText = e.target.value.toUpperCase(); // Convert to uppercase since we only have uppercase letters
            this.renderText(this.currentText);
        });
    }

    renderText(text) {
        // Clear any existing graphics
        if (this.graphics) {
            this.graphics.destroy();
        }

        // Calculate center position (accounting for text length and letter spacing)
        const totalWidth = text.length * (this.fontRenderer.glyphWidth * this.fontRenderer.scale + this.fontRenderer.letterSpacing) - this.fontRenderer.letterSpacing;
        const x = (this.cameras.main.width + totalWidth) / 2; // Add width since we're drawing right-to-left
        const y = (this.cameras.main.height - this.fontRenderer.glyphHeight * this.fontRenderer.scale) / 2;

        // Draw the new text
        this.graphics = this.fontRenderer.drawText(x, y, text);
    }
}

// Configure and start Phaser
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 200,  // Reduced height since we only need one line
    backgroundColor: '#000000',
    parent: 'game-container',
    scene: DemoScene
};

// Create the game instance
const game = new Phaser.Game(config);
