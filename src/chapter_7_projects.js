const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
    if (graph[from] == null) {
        graph[from] = [to];
    } else {
        graph[from].push(to);
    }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if(!roadGraph[this.place].includes(destination)) return this
        const newParcels = this.parcels.map(p => {
            if(p.place !== this.place) return p
            return {place: destination, address: p.address}
        }).filter(p => {
            p.address !== destination
        })
        return new VillageState(destination, newParcels)
    }
}

function runRobot(state, robot, memory) {
    for(let turn=0;;turn++){
        if(state.parcels.length === 0) {
            console.log(`Done in ${turn} turns`)
            break
        }
        const action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

// let first = new VillageState("Post Office", [{place: "Post Office", address: "Marketplace"}]);
// let next = first.move("Marketplace");
// console.log(first.place, first.parcels, next.place, next.parcels)

