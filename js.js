class Node {
    constructor(pos,path){
        this.pos = pos;
        this.path =path;
    }
}

function knightMoves([x,y],[a,b]){

    let q = [];
    let currentNode = new Node([x,y],[[x, y]]);
    q.push(currentNode);

    while(q.length>0){
        if (currentNode){
        currentNode = q.shift();
        if(currentNode.pos[0] == a && currentNode.pos[1] == b){
              break;
            
        }

        let possibleMoves = [
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2]
        ];

        possibleMoves.forEach(move => {
            const newPos = move;
                if (
                    newPos[0] >= 0 &&
                    newPos[0] <= 8 &&
                    newPos[1] >= 0 &&
                    newPos[1] <= 8
                ) {
                    const newPath = currentNode.path.concat([newPos]);
                    const newNode = new Node(newPos, newPath);
                    q.push(newNode);
                }
        });}
    }

    console.log(
        `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
      );
      currentNode.path.forEach(pos => {
        console.log(JSON.stringify(pos));
      });
}

knightMoves([1,2],[2,7]);