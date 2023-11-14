'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { Theme } from '@/styled/DefaultTheme'
import { GlobalStyle } from '@/styled/GlobalStyle'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



interface DefaultProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient()


export function DefaultProvider({ children }: DefaultProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <Theme>
          <GlobalStyle />
          {children}
        </Theme>
      </StyledComponentsRegistry>
    </QueryClientProvider>

  )
}
