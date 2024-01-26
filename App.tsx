import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from '@/providers/AuthProvider';
import Navigation from '@/navigation/Navigation';

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <SafeAreaProvider className='bg-[#1E1C2E]'>
            <Navigation/>
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style='light'/>

  </QueryClientProvider>
  );
}

