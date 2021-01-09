export default class Board {
    constructor(size) {
        this.current_color = 1;
        this.size = size;
        this.board = this.create_board(size);
        this.last_move_passed = false;
        this.in_atari = false;
        this.attempted_suicide = false;
    }

    create_board(size) {
        const m = [];
        for (let i = 0; i < size; i++) {
            m[i] = [];
            for (let j = 0; j < size; j++)
                m[i][j] = 0;
        }
        return m;
    }

    play(i, j) {
        console.log("Played at " + i + ", " + j);   
        if (this.board[i][j] !== 0) {
            this.board[i][j] = 0;
            return true;
        }
        this.board[i][j] = this.current_color;

        this.current_color === 1 ? this.current_color = 2 : this.current_color = 1
        return true;
    };
}

