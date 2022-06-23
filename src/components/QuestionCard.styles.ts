import styled from 'styled-components';
export const Wrapper = styled.div`

    max-width:1100px;
    background: #ffeeff;
    border-radius:10px;
    border: 2px solid #aaa;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    
    h5{
        margin:0;
        font-size: 1rem;
    }
    p{
        font-size: 1rem;
     
    }

`
type ButtonWrapperProps={
    correct: boolean;
    userClicked:boolean;
}
export const ButtonWrapper=styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover{
        opacity:0.8;

    }

    button{
        use-select:none;
        font-size: 0.8rem;
        width:100%;
        height: 40px;
        margin: 5px 0;
        border: 2px solid #fff;
        box-shadow: 1px 2px 0 rgba(0,0,0,0.1);
        border-radius: 10px;
        color: ${({userClicked})=>
                        userClicked? '#ccc'
                        :'#555'
        };
        text-shadow: 0px 1px 0 rgba(0,0,0,0.25);
        background: ${({correct, userClicked})=>
                        correct ? 'green'
                        : !correct && userClicked? 'red'
                        :'#eee'
        };
    
    }
`