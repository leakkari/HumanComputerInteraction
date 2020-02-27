$(document).ready(function(){
	$('.ui.accordion').accordion();
	$('.fadeMeIn').css('animation-play-state', 'running');
	
	// Chart 1
	var ctx = document.getElementById('test1Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Time taken (seconds)',
	            data: [90, 134, 145],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	responsive: true,
	        scales: {
	            xAxes: [{
	                ticks: {
	                    min: 0,
                		max: 300
	                }
	            }]
	        }
	    }
	});

	// Chart 2
	var ctx = document.getElementById('test2Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Time taken (seconds)',
	            data: [55, 174, 80],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            xAxes: [{
	                ticks: {
	                    min: 0,
                		max: 300
	                }
	            }]
	        }
	    }
	});

	// Chart 3
	var ctx = document.getElementById('test3Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Time taken (seconds)',
	            data: [25, 68, 55],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            xAxes: [{
	                ticks: {
	                    min: 0,
                		max: 300
	                }
	            }]
	        }
	    }
	});

	// Chart 5
	var ctx = document.getElementById('test5Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'horizontalBar',
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Time taken (seconds)',
	            data: [85, 30, 55],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            xAxes: [{
	                ticks: {
	                    min: 0,
                		max: 300
	                }
	            }]
	        }
	    }
	});

	// Post-Test Questionnaire Chart 1
	var ctx = document.getElementById('postTestQ1Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Effectiveness',
	            data: [3, 4, 4],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    min: 0,
                		max: 5
	                }
	            }]
	        }
	    }
	});
	// Post-Test Questionnaire Chart 2
	var ctx = document.getElementById('postTestQ2Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Redundancy',
	            data: [2, 1, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    min: 0,
                		max: 5
	                }
	            }]
	        }
	    }
	});
	// Post-Test Questionnaire Chart 3
	var ctx = document.getElementById('postTestQ3Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Utility/Motivating',
	            data: [1, 1, 4],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	           yAxes: [{
	                ticks: {
	                    min: 0,
                		max: 5
	                }
	            }]
	        }
	    }
	});
	// Post-Test Questionnaire Chart 4
	var ctx = document.getElementById('postTestQ4Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Learnability',
	            data: [4, 3, 4],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    min: 0,
                		max: 5
	                }
	            }]
	        }
	    }
	});
	// Post-Test Questionnaire Chart 5
	var ctx = document.getElementById('postTestQ5Chart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    
	    data: {
	        labels: ['Subject #1', 'Subject #2', 'Subject #3'],
	        datasets: [{
	            label: 'Memorability',
	            data: [1, 3, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	           yAxes: [{
	                ticks: {
	                    min: 0,
                		max: 5
	                }
	            }]
	        }
	    }
	});

});