class Renderable3D {
  constructor(shader, gl, surface) {
    this.shader = shader

    let vertex_position_array = surface.getVertexPositions()
    let vertex_normal_array = surface.getVertexNormals()
    let vertex_index_array = surface.getVertexIndices()

    debugger

    this.vertex_buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertex_buffer)
    gl.bufferData(gl.ARRAY_BUFFER, 
                  new Float32Array(vertex_position_array),
                  gl.STATIC_DRAW)

    this.normal_buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.normal_buffer)
    gl.bufferData(gl.ARRAY_BUFFER,
                  new Float32Array(vertex_normal_array),
                  gl.STATIC_DRAW)

    this.index_buffer = gl.createBuffer()
    this.index_buffer.number_vertex_point = vertex_index_array.length
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, 
                  new Uint16Array(vertex_index_array),
                  gl.STATIC_DRAW)
  }

  render(gl, model_matrix, normal_matrix, view_matrix, projection_matrix) {
    this.shader.use(gl, model_matrix, normal_matrix, view_matrix, 
                    projection_matrix, this.vertex_buffer, this.normal_buffer)

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer)
    gl.drawElements(gl.TRIANGLE_STRIP, 
                    this.index_buffer.number_vertex_point,
                    gl.UNSIGNED_SHORT, 0)
  }

}
