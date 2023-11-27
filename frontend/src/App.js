import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostsPage from './pages/posts/PostsPage';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ContactForm from './pages/contact/ContactForm';
import Footer from './components/Footer';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import {useCurrentUser} from "./contexts/CurrentUserContext";
import { useState } from "react";

function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";
    const [selectedContinent, setSelectedContinent] = useState("");

    return (
        <div className={styles.App}>
            <NavBar setSelectedContinent={setSelectedContinent} />
            <Container className={styles.Main}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <PostsPage message="No results found for your search terms. Please try something else!" />
                        )}
                    />
                    <Route
                        exact
                        path="/feed"
                        render={() => (
                            <PostsPage
                                message="The users you follow haven't posted yet, try following some new ones!"
                                filter={`owner__followed__owner__profile=${profile_id}&`}
                             />
                        )}
                    />
                    <Route
                        exact
                        path="/liked"
                        render={() => (
                            <PostsPage
                                message="You haven't liked any posts"
                                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                             />
                        )}
                    />
                    <Route
                        exact
                        path="/posts/continent/:continent"
                        render={() => (
                            <PostsPage
                                message="No posts found, try another continent"
                                filter={`continent=${selectedContinent}`}
                             />
                        )}
                    />
                    <Route exact path="/posts/:id" render={() => <PostPage />} />
                    <Route exact path="/signin" render={() => <SignInForm />} />
                    <Route exact path="/signup" render={() => <SignUpForm />} />
                    <Route exact path="/posts/create" render={() => <PostCreateForm />} />
                    <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
                    <Route
                        exact
                        path="/profiles/:id/edit/username"
                        render={() => <UsernameForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit/password"
                        render={() => <UserPasswordForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit"
                        render={() => <ProfileEditForm />}
                    />
                    <Route exact path="/contact" render={() => <ContactForm />} />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}

export default App;