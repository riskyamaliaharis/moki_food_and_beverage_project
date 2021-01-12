export const size = {
  chooseSizeAndDelivMethod() {
    console.log(this.size)
    if (this.size[3] == true && this.size[4] == true && this.size[5] == true)
      this.form.size_id = 14
    else if (
      this.size[0] == true &&
      this.size[1] == true &&
      this.size[2] == true
    )
      this.form.size_id = 13
    else if (this.size[4] == true && this.size[5] == true)
      this.form.size_id = 12
    else if (this.size[3] == true && this.size[5] == true)
      this.form.size_id = 11
    else if (this.size[3] == true && this.size[4] == true)
      this.form.size_id = 10
    else if (this.size[5] == true) this.form.size_id = 9
    else if (this.size[4] == true) this.form.size_id = 8
    else if (this.size[3] == true) this.form.size_id = 7
    else if (this.size[1] == true && this.size[2] == true) this.form.size_id = 6
    else if (this.size[0] == true && this.size[2] == true) this.form.size_id = 5
    else if (this.size[0] == true && this.size[1] == true) this.form.size_id = 4
    else if (this.size[2] == true) this.form.size_id = 3
    else if (this.size[1] == true) this.form.size_id = 2
    else if (this.size[0] == true) this.form.size_id = 1
    else console.log('choice is not available')
    console.log('size ' + this.form.size_id)
    if (
      this.checked[0] == true &&
      this.checked[1] == true &&
      this.checked[2] == true
    )
      this.delivery_method_id = 7
    else if (this.checked[1] == true && this.checked[2] == true)
      this.form.delivery_method_id = 6
    else if (this.checked[0] == true && this.checked[2] == true)
      this.form.delivery_method_id = 5
    else if (this.checked[0] == true && this.checked[1] == true)
      this.delivery_method_id = 4
    else if (this.checked[2] == true) this.form.delivery_method_id = 3
    else if (this.checked[1] == true) this.form.delivery_method_id = 2
    else if (this.checked[0] == true) this.form.delivery_method_id = 1
    else console.log('choice is not available')
    console.log(this.form.delivery_method_id)
  }
}
