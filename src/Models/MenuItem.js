class MenuItem {
    constructor(name="SamplePizza", possibleSizes=[10,20,30], price=20) {
        Object.assign(this, {name, possibleSizes, price})
    }
}

export default MenuItem;