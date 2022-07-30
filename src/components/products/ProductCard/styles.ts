import styled from 'styled-components';

export const Image = styled.img`
    max-width: 100%;
    max-height: 200px;
    margin: 0 auto;
    display: block;
`;

export const ProductDescription = styled.p`
    font-weight: 400;
    text-align: justify;
`;


export const ProductInfoItem = styled.div`
    flex: 1;
    text-align: center;

    &:not(:last-child) {
        border-right: 1px solid ${ ({ theme }) => theme.colors.greyDark };
    }
`;

export const CategoryLabel = styled.h3`
    text-transform: capitalize;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    background-color: ${ ({ theme }) => theme.colors.grey };
    margin: 0 20px 0 0;
    height: 30px;
    vertical-align: center;
    line-height: 30px;
    border-radius: 30px; 
`;

export const RatingLabel = styled.p`
    margin: 0;
    font-weight: 500;
    font-size: 15px;
    height: 30px;
    vertical-align: center;
    line-height: 30px;
`;


export const Price = styled.p`
    margin: 0;
    text-align: right;
    font-size: 24px;
`;

export const ControlsContainer = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.greyDark };
    border-radius: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px; 
`;

export const ControlButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 400;
`;

export const CardFooter = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-direction: column;
    margin-top: 30px;
`;

export const ProductTitle = styled.h2`
    min-height: 56px;
`;

export const StyledProductCard = styled.li`
    box-shadow: 0px 0px 10px ${ ({ theme }) => theme.colors.greyDark };
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
`;

export const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

