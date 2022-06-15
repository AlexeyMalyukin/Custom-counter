document.querySelector('.file').addEventListener('input', function () {
        let file = document.querySelector('.file').files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            let numberArr = reader.result.split(/\r?\n/); 
            console.log(numberArr);
            document.querySelector('.block_upload i').style.display = 'block';
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
    let max = Number(arr[0]);
    for(let i=1; i < arr.length; i++) {
        let number = Number(arr[i]);
        number > max ? max = number : '';
    }
    //console.log('Max = ', max);
    document.querySelector('.max_value').innerHTML = `Max = ${max}`;

};

const minValue = (arr) => {
    let min = Number(arr[0]);
    for(let n=1; n < arr.length; n++) {
        let number = Number(arr[n]);
        number < min ? min = number : '';
    }
    //console.log('Min = ', min); 
    document.querySelector('.min_value').innerHTML = `Min = ${min}`;
    
};

const averageValue = (arr) => {
    let sum = Number(arr[0]);
    for(let k=0; k < arr.length; k++) {
       sum += Number(arr[k]);
    }
    let average = sum/arr.length;
    document.querySelector('.average_value').innerHTML = `Average = ${average}`;
};

const medianValue = (arr) => {
    let mid = Math.round(arr.length/2);
    //console.log(mid);
    arr.length%2 == 0 ? (median = (Number(arr[mid]) + Number(arr[mid-1]))/2, 
    document.querySelector('.median_value').innerHTML = `Median = ${median}`) : 
    (median = Number(arr[mid-1]), 
    document.querySelector('.median_value').innerHTML = `Median = ${median}`);
};
    
const maxSequence = (arr) => {
    let tempSequence = [Number(arr[0])];
    let resSequence = [Number(arr[0])];
    for(let i=1; i < arr.length; i++) {
        Number(arr[i]) > Number(arr[i-1]) ? 
        tempSequence.push(Number(arr[i])) 
        : ((tempSequence.length > resSequence.length ?
        resSequence = tempSequence : ''), 
        tempSequence = [Number(arr[i])]);

        tempSequence.length > resSequence.length ? resSequence = tempSequence : '';

    } 
    //console.log(resSequence);
    document.querySelector('.max_seqience--result').innerHTML = `Max Sequence = ${resSequence}`;
}

const minSequence = (arr) => {
    let tempSequence = [Number(arr[0])];
    let resSequence = [Number(arr[0])];
    for(let i=1; i < arr.length; i++) {
        Number(arr[i]) < Number(arr[i-1]) ? 
        tempSequence.push(Number(arr[i])) 
        : ((tempSequence.length > resSequence.length ?
        resSequence = tempSequence : ''), 
        tempSequence = [Number(arr[i])]);

        tempSequence.length > resSequence.length ? resSequence = tempSequence : '';

    }
    //console.log(resSequence);
    document.querySelector('.min_seqience--result').innerHTML = `Min Sequence = ${resSequence}`;
}


