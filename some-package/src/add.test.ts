import {add} from "./add";

function test() {
    if(add(1, 2) !== 3) {
        throw new Error("Yikes")
    }
}
