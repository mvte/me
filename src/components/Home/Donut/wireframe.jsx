export class Wireframe {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }

    /**
     * rotates a shape about a given axis
     * @param {Number} angle angle to rotate in radians
     * @param {Vertex} axis axis of rotation
     */
    rotateAxis(angle, axis) {
        const {x, y, z} = axis;
        const u = x / Math.sqrt(x * x + y * y + z * z);
        const v = y / Math.sqrt(x * x + y * y + z * z);
        const w = z / Math.sqrt(x * x + y * y + z * z);
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const oneMinusCos = 1 - cos;
        const rotationMatrix = [
            [u * u * oneMinusCos + cos, u * v * oneMinusCos - w * sin, u * w * oneMinusCos + v * sin],
            [u * v * oneMinusCos + w * sin, v * v * oneMinusCos + cos, v * w * oneMinusCos - u * sin],
            [u * w * oneMinusCos - v * sin, v * w * oneMinusCos + u * sin, w * w * oneMinusCos + cos]
        ];
        for (let i = 0; i < this.vertices.length; i++) {
            const {x, y, z} = this.vertices[i];
            this.vertices[i].x = rotationMatrix[0][0] * x + rotationMatrix[0][1] * y + rotationMatrix[0][2] * z;
            this.vertices[i].y = rotationMatrix[1][0] * x + rotationMatrix[1][1] * y + rotationMatrix[1][2] * z;
            this.vertices[i].z = rotationMatrix[2][0] * x + rotationMatrix[2][1] * y + rotationMatrix[2][2] * z;
        }
    }

    static generateDonut(innerRadius, outerRadius, resolution, ratio = 1) {
        const thetaPoints = resolution;
        const phiPoints = resolution * ratio;

        const vertices = [];
        for (let i = 0; i < thetaPoints; i++) {
            const theta = i * 2 * Math.PI / thetaPoints;
            for (let j = 0; j < phiPoints; j++) {
                const phi = j * 2 * Math.PI / phiPoints;
                vertices.push(Wireframe.#donutFun(theta, phi, innerRadius, outerRadius));
            }
        }

        const edges = [];
        for(let i = 0; i < vertices.length; i++) {
            if(i % phiPoints !== phiPoints - 1)
                edges.push(new Edge(i, (i+1)%vertices.length));
            else {
                edges.push(new Edge(i, i - phiPoints + 1));
            }
            edges.push(new Edge(i, (i+phiPoints)%vertices.length));
        }


        return new Wireframe(vertices, edges);
    }

    /**
     * generates a point on the surface of a donut, given angle around 
     * the origin (theta) and angle around the "tube" (phi)
     * @param {*} theta angle around the origin
     * @param {*} phi angle around the tube
     * @param {*} innerRadius inner radius of the donut
     * @param {*} outerRadius outer radius of the donut
     * @returns a point on the surface of the donut
     */
    static #donutFun(theta, phi, innerRadius, outerRadius) {
        const torusRadius = (innerRadius + outerRadius) / 2;
        const tubeRadius = (outerRadius - innerRadius) / 2;

        const r = torusRadius + tubeRadius * Math.cos(phi);
        return new Vertex(r * Math.cos(theta), r * Math.sin(theta), tubeRadius * Math.sin(phi));
    }
}

export class Vertex {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    //rotates about the given axis (through the origin)
    rotateAxis(angle, axis) {
        const rotationMatrix = [
            [Math.cos(angle) + axis.x * axis.x * (1 - Math.cos(angle)), axis.x * axis.y * (1 - Math.cos(angle)) - axis.z * Math.sin(angle), axis.x * axis.z * (1 - Math.cos(angle)) + axis.y * Math.sin(angle)],
            [axis.y * axis.x * (1 - Math.cos(angle)) + axis.z * Math.sin(angle), Math.cos(angle) + axis.y * axis.y * (1 - Math.cos(angle)), axis.y * axis.z * (1 - Math.cos(angle)) - axis.x * Math.sin(angle)],
            [axis.z * axis.x * (1 - Math.cos(angle)) - axis.y * Math.sin(angle), axis.z * axis.y * (1 - Math.cos(angle)) + axis.x * Math.sin(angle), Math.cos(angle) + axis.z * axis.z * (1 - Math.cos(angle))]
        ];
        this.transform(rotationMatrix);
    }

    //apply a transformation matrix (in R3) to this point 
    transform(matrix) {
        this.x = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];
        this.y = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];
        this.z = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];
    }

    static origin() {
        return new Vertex(0, 0, 0);
    }
}

export class Edge {
    /**
     * defines an edge between two vertices
     * @param {Number} p1 index of point 1
     * @param {Number} p2 index of point 2
     */
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
}