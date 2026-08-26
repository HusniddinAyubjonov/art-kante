import { AppRouter } from '@/app/providers/router.jsx';
import { CallbackFormProvider, CallbackFormModal } from '@/features/callback-form';

export const App = () => {
  return (
    <CallbackFormProvider>
      <AppRouter />
      <CallbackFormModal />
    </CallbackFormProvider>
  );
};
