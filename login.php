<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
    // Utilisateurs et mots de passe fictifs pour l'exemple
    $users = [
        'admin' => 'password123',
        'user' => 'userpassword'
    ];

    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vérifier les identifiants
    if (isset($users[$username]) && $users[$username] == $password) {
        $_SESSION['user'] = $username;
        header('Location: films.html');  // Rediriger vers la page des films si l'authentification réussie
        exit();
    } else {
        $error_message = "Identifiants invalides.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Connexion - Nkrmov</title>
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
  <header>
    <h1>Connexion - Nkrmov</h1>
  </header>

  <main>
    <?php if (isset($error_message)): ?>
      <p style="color: red;"><?php echo $error_message; ?></p>
    <?php endif; ?>

    <form action="login.php" method="post">
      <label for="username">Nom d'utilisateur :</label>
      <input type="text" id="username" name="username" required>
      
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required>
      
      <button type="submit">Se connecter</button>
    </form>
  </main>
</body>
</html>
