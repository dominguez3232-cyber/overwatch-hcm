import { Router } from './components/Router';
import { GranularRigorProvider } from './components/GranularRigorProvider';

export default function App() {
  return (
    <GranularRigorProvider enabled={true}>
      <div
        className="dark min-h-screen bg-background text-foreground"
        style={{
          fontFamily: "'Biome', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        <Router initialRoute="landing" />
      </div>
    </GranularRigorProvider>
  );
}