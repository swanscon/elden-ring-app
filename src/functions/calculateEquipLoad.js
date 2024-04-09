export default function calculateEquipLoad(endurance) {
    if(endurance <= 8) {
        return 45.0;
    } else if(endurance <= 12) {
        return 45 + 1.6 * (endurance - 8);
    } else if(endurance === 13) {
        return 52.9;
    } else if(endurance <= 20) {
        return 52.9 + 1.6 * (endurance - 13);
    } else if(endurance === 21) {
        return 65.6
    } else if(endurance <= 25) {
        return 65.6 + 1.6 * (endurance - 21);
    } else if(endurance === 26) {
        return 73.0;
    } else if(endurance <= 28) {
        return 73.0 + 1.1 * (endurance - 26); 
    } else if(endurance <= 30) {
        return 75.2 + 1.2 * (endurance - 28);
    } else if(endurance <= 36) {
        return 77.6 + 1.3 * (endurance - 30);
    } else if(endurance === 37) {
        return 86.8;
    } else if(endurance <= 45) {
        return 88.1 + 1.4 * (endurance - 38);
    } else if(endurance <= 48) {
        return 99.4 + 1.4 * (endurance - 46);
    } else if(endurance <= 50) {
        return 102.2 + 1.5 * (endurance - 48);
    } else if(endurance <= 53) {
        return 106.6 + 1.5 * (endurance - 51);
    } else if(endurance <= 60) {
        return 111.0 + 1.5 * (endurance - 54);
    } else if(endurance === 61) {
        return 121.0;
    } else if(endurance <= 65) {
        return 122.1 + 1.0 * (endurance - 62);
    } else if(endurance <= 69) {
        return 126.2 + 1.0 * (endurance - 66);
    } else if(endurance <= 73) {
        return 130.3 + 1.0 * (endurance - 70);
    } else if(endurance <= 77) {
        return 134.4 + 1.0 * (endurance - 74);
    } else if(endurance <= 81) {
        return 138.5 + 1.0 * (endurance - 78);
    } else if(endurance <= 85) {
        return 142.6 + 1.0 * (endurance - 82);
    } else if(endurance <= 89) {
        return 146.7 + 1.0 * (endurance - 86);
    } else if(endurance <= 93) {
        return 150.8 + 1.0 * (endurance - 90);
    } else if(endurance <= 97) {
        return 154.9 + 1.0 * (endurance - 94);
    } else {
        return 159.0 + 1.0 * (endurance - 98);
    }
}
