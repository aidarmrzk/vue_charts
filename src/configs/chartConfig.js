export const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ],
    datasets: [
        {
            label: 'План',
            borderColor: '#18A0FB',
            borderWidth: 2, 
            pointBackgroundColor: '#18A0FB',
            fill: true,
            backgroundColor: '#18A0FB4D',
            data: [0, 40, 50, 70, 90, 110, 160, 170, 190, 240, 260, 280, 285, 295, 295, 295, 320, 350, 380, 400, 440, 450, 470, 490, 500, 510, 530, 550, 570, 580, 600]
        },
        {
            label: 'Факт',
            borderColor: '#13D6FF',
            borderWidth: 2,
            pointBackgroundColor: '#13D6FF',
            fill: true,
            backgroundColor: '#BDFFFFB2',
            data: [0, 20, 20, 200, 200, 200, 80, 90, 100, 120, 130, 140, 140, 100, 100, 100, 170, 180, 190, 210, 220, 200, 200, 180, 200, 275, 280, 285, 290, 295, 300]
        }
    ]
}

export const options = {
    plugins: {
        legend: {
            // align: 'start',
            labels: {
            },
            title: {
            }
        },
        title: {
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 25,
            right: 25,
            top: 25,
            bottom: 25,
        }
    },
    scales: {
        x: {
            grid: {
                color: 'transparent'
            },
        },
        y: {
            grid: {
                color: '#292829'
            },
            border: {
                color: 'transparent'
            }
        },
    }
}