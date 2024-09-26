import styled from '@emotion/styled';

import { ReactNode } from 'react';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

type Props = {
    children: ReactNode;
};

function Layout({ children }: Props) {
    return <Container>{children}</Container>;
}

export { Layout };
