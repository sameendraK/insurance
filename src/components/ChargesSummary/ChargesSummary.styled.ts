import styled from 'styled-components';

export const ChargesSummaryWrapper = styled.div`

.wrapper{
    display:flex;
    }
// .charges-form-wrapper-container{
//     margin-right:20px;
// }
.charges-form-wrapper-container{
    // height: 500px;
    // width: 250px;
    // position:relative;
    // left:445px;
    // bottom:150px;
    // border: solid 1px blue;
    // text-align: center;
    // // box-shadow: -3px 3px 18px 2px #3b93ff;
    // transition:.8s;
    // border-radius:10px;
    // // padding:5px;
    // background-color:#fff;
    }
    .plan-1{
        background:silver;
        // font-size:50px;
        color:white;
    }
    .charges-form-wrapper-container:hover{
        transform:scale(1.1);
        }
        
        .wrapper{
            display:flex;
            }
            
            .card-1:hover{
                box-shadow: -3px 3px 18px 2px silver;
                border: solid 1px silver;
                border-radius:5px;
                }
                
                    .card-3:hover{
                        box-shadow: -3px 3px 18px 2px silver;
                        border: solid 2px #b8b5b8;
                        border-radius:5px;
                }
.card-1-heading{
    background-image: linear-gradient(90deg,silver, transparent);
}
.card-2-heading{
    background-image: linear-gradient(90deg,gold, transparent);
}
.card-3-heading{
    background-image: linear-gradient(90deg,#b8b5b8, transparent);
}

.recommended-card{
    // height: 570px;
    // width: 300px;
    // position:relative;
    // left:445px;
    // bottom:180px;
    // border: solid 1px blue;
    // text-align: center;
    background: linear-gradient(360deg, #ffe76f, transparent);
    // transition:.8s;
    // border-radius:10px;
    // background:#ffe76f;
}

.plans-container-wrapper{
    display: grid;
    grid-template-columns: 1fr 1.25fr 1fr;
    gap: 2em;}

.
// .view-more-silver-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
// }
    .view-more-button{
    position: relative;
    left: 100px;
    top: 10px;
    }
//     .view-more-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
//     }
// .view-more-platinum-button>button{
//     background-color: #dfdfdf;
//     border: #dfdfdf;
//     padding: 6px 11px;
//     border-radius: 5px;
// }
    .gold-plan-more-details{
    display:block;
    margin-top:10px;
    transition:.8s
    }
    .badge-container a {
    color: #0097be;
}
    .display-none{
        display:none;
        }
        
        .view-more-silver-button{
            margin-left: 145px;
            margin-top:10px;
            }
            .view-more-platinum-button{
                margin-top:10px;
                margin-left: 145px;
    }

    tbody>tr>td{
        text-align:left;
    }
`;
