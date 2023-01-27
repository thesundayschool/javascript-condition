document.querySelector('#country').addEventListener('change', function () {

    let selectedValue = document.querySelector('#country').value

    console.log(selectedValue)

    if (selectedValue === 'india') {
        document.querySelector('#container').innerHTML = `
            <h3>India</h3>
            <ul>
                <li>The current population of India is 1,414,792,391 as of Friday, January 27, 2023, based on Worldometer elaboration of the latest United Nations data.</li>
                <li>India 2020 population is estimated at 1,380,004,385 people at mid year according to UN data.</li>
                <li>India ranks number 2 in the list of countries (and dependencies) by population.</li>
            </ul>
        `
    } else if (selectedValue === 'unitedstates') {
        document.querySelector('#container').innerHTML = `
    <h3>United States</h3>
    <ul>
        <li>The current population of the United States of America is 335,978,010 as of Friday, January 27, 2023, based on Worldometer elaboration of the latest United Nations data.</li>
        <li>The United States 2020 population is estimated at 331,002,651 people at mid year according to UN data.</li>
        <li>The U.S.A. ranks number 3 in the list of countries (and dependencies) by population.</li>
    </ul>
`
    } else if (selectedValue === 'russia') {
        document.querySelector('#container').innerHTML = `
    <h3>Russia</h3>
    <ul>
        <li>The current population of the Russian Federation is 146,094,787 as of Friday, January 27, 2023, based on Worldometer elaboration of the latest United Nations data.</li>
        <li>Russia 2020 population is estimated at 145,934,462 people at mid year according to UN data.</li>
        <li>Russia ranks number 9 in the list of countries (and dependencies) by population.</li>
    </ul>
`
    } else if (selectedValue === 'unitedkingdom') {
        document.querySelector('#container').innerHTML = `
    <h3>United Kingdom</h3>
    <ul>
        <li>The current population of the United Kingdom is 68,800,060 as of Friday, January 27, 2023, based on Worldometer elaboration of the latest United Nations data.</li>
        <li>The United Kingdom 2020 population is estimated at 67,886,011 people at mid year according to UN data.</li>
        <li>The U.K. ranks number 21 in the list of countries (and dependencies) by population.</li>
    </ul>
`
    }

})