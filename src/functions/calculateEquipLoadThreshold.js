export default function calculateEquipLoadThreshold(maxLoad, threshold) {
    let result = maxLoad;
    if(threshold === "light") {
        result = result*0.299
    } else if(threshold === "medium") {
        result = result*0.699
    }
    return result;
}