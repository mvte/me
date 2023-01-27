import './index.scss';
import { Wireframe, Vertex } from './wireframe.js';
import { useRef, useEffect } from 'react';

/**
 * Given a point in 3D space, project it onto a 2D plane some distance from an observer.
 * The current method of projetion is weak perspective projection, assuming that the
 * observer is on the negative z-axis. This function translates the projection to the
 * middle of the canvas.
 * @param {Vertex} vertex point in 3D space
 * @param {Number} focalLength distance from observer to plane
 * @param {CanvasRenderingContext2D} ctx canvas context 
 * @returns {Number, Number} point in 2D space on plane
 */
function project(vertex, focalLength, ctx) {
    return {
        x: (vertex.x * focalLength) / (vertex.z + focalLength) + (ctx.canvas.width/2),
        y: (vertex.y * focalLength) / (vertex.z + focalLength) + (ctx.canvas.height/2)
    }
}


function drawOnPlane(ctx, wireframe, focalLength) {
    ctx.beginPath();
    const {vertices, edges} = wireframe;
    for (let i = 0; i < edges.length; i++) {
        const {p1, p2} = edges[i];
        const projectedPoint1 = project(vertices[p1], focalLength, ctx);
        const projectedPoint2 = project(vertices[p2], focalLength, ctx);
        ctx.moveTo(projectedPoint1.x, projectedPoint1.y);
        ctx.lineTo(projectedPoint2.x, projectedPoint2.y);
    }
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}

const Donut = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const focalLength = 240;
        const wireframe = Wireframe.generateDonut(75, 150, 20, 0.5);
        const axis = new Vertex(1,1,0);
        animate();
    
        function animate() {
            // clear canvas
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            drawOnPlane(ctx, wireframe, focalLength);
            wireframe.rotateAxis(0.01, axis);
            axis.rotateAxis(0.005, new Vertex(0,0,-1));
    
            requestAnimationFrame(animate);
        }
    }, [canvasRef])

    return (
        <div className = "donut-container">
            <canvas ref={canvasRef} width="400" height="400"></canvas>
        </div>
    )
}

export default Donut