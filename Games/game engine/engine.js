class Game {
    constructor(width, height) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.appendChild(this.canvas);

        this.lastFrameTime = 0;
        this.deltaTime = 0;
        this.entities = [];
        this.scenes = {};
        this.currentScene = null;
        
        this.init();
    }

    init() {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(currentTime) {
        this.deltaTime = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;

        if (this.currentScene) {
            this.update(this.deltaTime);
            this.render();
        }
        
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(deltaTime) {
        this.currentScene.update(deltaTime);
        this.entities.forEach(entity => entity.update(deltaTime));
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.currentScene.render(this.context);
        this.entities.forEach(entity => entity.render(this.context));
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    addScene(name, scene) {
        this.scenes[name] = scene;
    }

    switchScene(name) {
        this.currentScene = this.scenes[name];
        this.currentScene.init();
    }
}

class Scene {
    constructor() {
        this.entities = [];
    }

    init() {
        // Inicialização da cena (se necessário)
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    update(deltaTime) {
        this.entities.forEach(entity => entity.update(deltaTime));
    }

    render(context) {
        this.entities.forEach(entity => entity.render(context));
    }
}

class Entity {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    update(deltaTime) {
        // Atualizações da entidade, como movimentação, lógica, etc.
    }

    render(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Exemplo de uso:
const game = new Game(800, 600);

const mainScene = new Scene();
game.addScene('main', mainScene);
game.switchScene('main');

const player = new Entity(50, 50, 50, 50, 'blue');
mainScene.addEntity(player);
