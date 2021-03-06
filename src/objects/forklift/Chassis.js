class Chassis extends Object3D {
  draw(gl, parent_model_matrix, view_matrix, projection_matrix) {
    let model_matrix = this.modelMatrix(parent_model_matrix)
    let normal_matrix = this.normalMatrix(model_matrix, view_matrix)

    this.body.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.front.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.seat.draw(gl, model_matrix, view_matrix, projection_matrix)
    this.lift.draw(gl, model_matrix, view_matrix, projection_matrix)
  }

  raisePlatform() {
    this.lift.raisePlatform()
  }

  lowerPlatform() {
    this.lift.lowerPlatform()
  }

  initialize3dComponents(n_rows, n_columns, shader, textures, gl) {
    this.body = new Body(n_rows, n_columns, shader, textures.body, gl)

    this.front = new Parallelepiped(n_rows, n_columns, shader, textures.front, gl)
    this.front.translateX(0.4)
    this.front.translateZ(0.22)
    this.front.translateY(0.35)
    this.front.scaleZ(0.1)
    this.front.scaleY(2)
    this.front.scaleX(0.1)
    this.front.rotateX(-Math.PI/2)

    this.seat = new Parallelepiped(n_rows, n_columns, shader, textures.seat, gl)
    this.seat.translateX(-0.4)
    this.seat.translateZ(-0.25)
    this.seat.translateY(0.5)
    this.seat.scaleX(0.1)
    this.seat.scaleZ(0.5)
    this.seat.scaleY(2)
    this.seat.rotateX(-Math.PI/2)
    this.seat.rotateZ(Math.PI)

    this.lift = new Lift(n_rows, n_columns, shader, textures.lift, gl)
  }
}