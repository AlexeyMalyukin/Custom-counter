document.querySelector('.file').addEventListener('input', function () {
        let file = document.querySelector('.file').files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            let numberArr = reader.result.split(/\r?\n/); 
            console.log(numberArr);
            document.querySelector('.max').addEventListener('click', () => {
                maxValue(numberArr);
            });
            
            document.querySelector('.min').addEventListener('click', () => {
                minValue(numberArr);
            });

            document.querySelector('.average').addEventListener('click', () => {
                averageValue(numberArr);
            });

            document.querySelector('.median').addEventListener('click', () => {
                medianValue(numberArr);
            });   
            
            document.querySelector('.max_sequence').addEventListener('click', () => {
                maxSequence(numberArr);
            });

            document.querySelector('.min_sequence').addEventListener('click', () => {
                minSequence(numberArr);
            });   

        };

        reader.onerror = function() {
            console.log(reader.error);
        };

    })


const maxValue = (arr) => {
    let max = arr[0];
    for(let i=1; i < arr.length; i++) {
        let number = parseInt(arr[i]);
        number > max ? max = number : '';
    }
    //console.log('Max = ', max);
    document.querySelector('.max_value').innerHTML = `Max = ${max}`;

};

const minValue = (arr) => {
    let min = arr[0];
    for(let n=1; n < arr.length; n++) {
        let number = parseInt(arr[n]);
        number < min ? min = number : '';
    }
    //console.log('Min = ', min); 
    document.querySelector('.min_value').innerHTML = `Min = ${min}`;
    
};

const averageValue = (arr) => {
    let sum = parseInt(arr[0]);
    for(let k=1; k < arr.length; k++) {
       sum += parseInt(arr[k]);
    }
    let average = sum/arr.length;
    //console.log('Avarage = ', avarage);
    document.querySelector('.average_value').innerHTML = `Avarage = ${average}`;
};

const medianValue = (arr) => {
    let mid = Math.round(arr.length/2);
    //console.log(mid);
    arr.length%2 == 0 ? (median = (parseInt(arr[mid]) + parseInt(arr[mid-1]))/2, 
    document.querySelector('.median_value').innerHTML = `Median = ${median}`) : 
    (median = parseInt(arr[mid-1]), 
    document.querySelector('.median_value').innerHTML = `Median = ${median}`);
};
    
const maxSequence = (arr) => {
    let tempSequence = [parseInt(arr[0])];
    let resSequence = [parseInt(arr[0])];
    for(let i=1; i < arr.length; i++) {
        parseInt(arr[i]) > parseInt(arr[i-1]) ? 
        tempSequence.push(parseInt(arr[i])) 
        : ((tempSequence.length > resSequence.length ?
        resSequence = tempSequence : ''), 
        tempSequence = [parseInt(arr[i])]);

        tempSequence.length > resSequence.length ? resSequence = tempSequence : '';

    } 
    //console.log(resSequence);
    document.querySelector('.max_seqience--result').innerHTML = `Max Sequence = ${resSequence}`;
}

const minSequence = (arr) => {
    let tempSequence = [parseInt(arr[0])];
    let resSequence = [parseInt(arr[0])];
    for(let i=1; i < arr.length; i++) {
        parseInt(arr[i]) < parseInt(arr[i-1]) ? 
        tempSequence.push(parseInt(arr[i])) 
        : ((tempSequence.length > resSequence.length ?
        resSequence = tempSequence : ''), 
        tempSequence = [parseInt(arr[i])]);

        tempSequence.length > resSequence.length ? resSequence = tempSequence : '';

    }
    //console.log(resSequence);
    document.querySelector('.min_seqience--result').innerHTML = `Min Sequence = ${resSequence}`;
}


