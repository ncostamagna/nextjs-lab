"use client";

import useUser from "@/hooks/useUser";
import Nav from "@/components/nav";

export default function Home() {
  const userState = useUser((state) => state.user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Nav />
        <p>Welcome to this index page</p>
        {userState != null && (
          <div>
            <ul>
              <li>ID: {userState?.id}</li>
              <li>First name: {userState?.firstname}</li>
              <li>Last name: {userState?.lastname}</li>
              <li>Nickname: {userState?.nickname}</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
/*

const Login = () => {
  const spinnerState = useSpinner((state) => state.spinner);
  const enableSpinner = useSpinner((state) => state.enableSpinner);
  const disableSpinner = useSpinner((state) => state.disableSpinner);

  const { t } = useTranslation("main");
  const router = useRouter();

  useEffect(() => {
    const userID = window.localStorage.getItem("axul_user_id");
    const token = window.localStorage.getItem("axul_token");
    enableSpinner();
    if (userID != null && userID != "" && token != null && token != "") {
      router.push(`/home`);
    }
    disableSpinner();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = data.get("user");
    const password = data.get("password");

    if (user == null || user == "" || password == null || password == "") {
      Error(t, "login.validation.required");
      return;
    }

    const fetchData = async () => {
      const cont = await userLogin(user.toString(), password.toString());

      return cont;
    };

    enableSpinner();
    fetchData()
      .then((data: LoginEntity) => {
        if (data.user.id != undefined) {
          window.localStorage.setItem("axul_user_id", data.user.id);
          window.localStorage.setItem("axul_token", data.token);
          router.push(`/home`);
        }
      })
      .catch(() => {
        Error(t, "login.validation.auth");
        window.localStorage.removeItem("axul_user_id");
        window.localStorage.removeItem("axul_token");
        disableSpinner();
      })
      .finally(() => {});
  };

  // ajustar, al entrar al login debe o ri al home o esperar
  return withSpinnerSync(
    spinnerState,
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="User"
            name="user"
            autoComplete="user"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export const getStaticProps = commonGetStaticProps;

export default Login;
*/
