class Forklift extends Object3D {
  draw(gl, parent_model_matrix, view_matrix, projection_matrix) {
    let model_matrix = this.modelMatrix(parent_model_matrix)
    let normal_matrix = this.normalMatrix(model_matrix, view_matrix)

    this.wheel1.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.wheel2.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.wheel3.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.wheel4.draw(gl, model_matrix, view_matrix, projection_matrix)
  }

  moveForward(distance) {
    // TODO: Implement
  }

  moveBackwards(distance) {
    // TODO: Implement
  }

  grabObject(object) {
    // TODO: Implement
  }

  raise() {
    // TODO: Implement
  }

  lower() {
    // TODO: Implement
  }

  initialize3dComponents(n_rows, n_columns, shader, gl) {
    this.wheel1 = new Wheel(n_rows, n_columns, shader, gl)
    this.wheel1.translateZ(1)
    this.wheel1.translateX(1.5)
    this.wheel1.rotateX(Math.PI/2)

    this.wheel2 = new Wheel(n_rows, n_columns, shader, gl)
    this.wheel2.translateZ(1)
    this.wheel2.translateX(-1.5)
    this.wheel2.rotateX(Math.PI/2)

    this.wheel3 = new Wheel(n_rows, n_columns, shader, gl)
    this.wheel3.translateZ(-1)
    this.wheel3.translateX(1.5)
    this.wheel3.rotateX(Math.PI/2)

    this.wheel4 = new Wheel(n_rows, n_columns, shader, gl)
    this.wheel4.translateZ(-1)
    this.wheel4.translateX(-1.5)
    this.wheel4.rotateX(Math.PI/2)

  }
}
