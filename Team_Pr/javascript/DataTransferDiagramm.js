document.getElementById('DrawChart').addEventListener('click', function(event) {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        var audio = document.getElementById('Audio').value;
        data.addRows
        var video = document.getElementById('Video').value;
        data.addRows
        var photo = document.getElementById('Photo').value;
        data.addRows([
            ['audio',parseInt(audio)],
            ['video', parseInt(video)],
            ['photo', parseInt(photo)],
            ['free', 100-parseInt(audio)-parseInt(video)-parseInt(photo)],
        ]);
        var options = {
            pieHole: 0.55,
            legend: { position: 'none' },
            pieSliceText: 'none',
            chartArea: {left: 40, top: 32, width: 228, height: 228},
            slices: {0: {color: '4daf7b'}, 1: {color: 'e35836'}, 2: {color: 'ebc85e'}, 3: {color: 'f4ede7'}},
            height: 300,
            width: 310,
            tooltip: {trigger: 'selection'}
        };
        var chart = new google.visualization.PieChart(document.getElementById('Chart_div'));
        chart.draw(data, options);
    }
});
