import { useSelector } from 'react-redux';
import ContactsForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';
import Container from './component/Container';
import { getLoading, getError, getItems } from 'redux/phonebook';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const visibleFilter = useSelector(getItems);

  return (
    <div>
      {error && <h1 className="error">{error.message}</h1>}
      {!error && (
        <Container>
          <h1>Phonebook</h1>
          <ContactsForm />
          {/* <h2>Contact</h2> */}

          {visibleFilter.length > 1 && <Filter />}

          {loading && (
            <Loader
              className="loader"
              type="Audio"
              color="#464646"
              height={40}
              width={40}
              timeout={3000} //3 secs
            />
          )}

          <ContactList />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      )}
    </div>
  );
}
