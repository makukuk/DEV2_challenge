import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  res.render("index", { title: "Quiz" });
});

router.post("/quiz", async (req: Request, res: Response): Promise<void> => {
  const correctAntwoord: string = "gold123";
  const userAntwoord: string = req.body.antwoord?.trim() || "";
  const username: string = req.body.username?.trim() || "Unknown Pirate";
  const isCorrect: boolean = userAntwoord.toLowerCase() === correctAntwoord.toLowerCase();

  const message: string = isCorrect
    ? `✅ Arrr, ${username}! Ye answered true, and the treasure be yers!`
    : `❌ Ye scallywag, ${username}! That be the wrong answer!`;

    if (isCorrect) {
      fetch("https://api.deweirdt.be/games/index.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ 
              game_key: "Arrr_matey",
              username
          })
      });
  }  

  res.render("result", { title: "Quiz resultaat", boodschap: message });
});

export default router;
