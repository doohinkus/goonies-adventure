import { Choice } from './choice.model';

export const CHOICES: Choice[] = [
 new Choice("Read a book about Treasures", "You snuggle up beneath the covers, begin reading, but before your finish the first paragraph, you fall asleep.", 0, 3, 13, -1),
 new Choice("You found the treasure!!!!", "Congratulations, you win!!!", 2, 2, 2, 1),
 new Choice("Read a book about Pirates", "When you open the book, a map tumbles from the pages onto your lap.", 3, 2, 2, 1),
 new Choice("You lose", "You lost.", 13, 13, 13, -1)

];
