import styled from '@emotion/styled';

import { ReactNode } from 'react';

const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return <LayoutWrapper>{children}</LayoutWrapper>;
}

export { Layout };
