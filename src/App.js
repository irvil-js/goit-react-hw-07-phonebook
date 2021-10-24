import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Section from './components/Section';
import { getLoading, getError, getItems } from 'redux/phonebook';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

export default function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const visibleFilter = useSelector(getItems);

  return (
    <div className={styles.wrapper}>
      {error && <h1 className="error">{error.message}</h1>}
      {!error && (
        <Section title="Phonebook">
          <ContactForm />
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
        </Section>
      )}
    </div>
  );
}
