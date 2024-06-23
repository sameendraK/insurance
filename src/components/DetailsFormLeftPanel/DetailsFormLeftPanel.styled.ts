import styled from 'styled-components';

export const DetailsFormLeftPanelWrapper = styled.div`
.logo-heading-container{
display:flex;
align-items:center;
}

.margin-left-16-px{
margin-left:16px
}

.details-form-container-wrapper{
    width:70%;
    position: relative;
    top: 200px;
    left: 100px;
    border-radius: 10px;
    color:white;
    background: rgba(0, 0, 0, 0.31);
    // height:150px;
    // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    }

    .logo-container{
        height:30px;
        width:30px;
        text-align:center;
        align-content:center;
        background:#2BB4C0;
        border-radius:50%;
        color:white;
    }

    .nav-items-container{
    height: 100%;
    display: flex;
    }

    .active-tab{
        background:green;
        color:yellow;
    }

    li{
    list-style:none;
    }

    .react-icons{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .nav-headings{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:0;
    }

    ul{
    display:flex;
    }
`;
