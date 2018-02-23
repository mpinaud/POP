# POP!

#### A real time interactive data visualizer comparing the lifecycle of the top 20 trending Twitter tags. Watch it before the POP!

#### by **Mikey Pinaud**

## Description
#### POP! is a real time interactive data visualizer comparing the lifecycle of the top 20 trending Twitter tags. Each tag will begin it’s Pop-cycle in the form of a black bubble floating amongst others within an incubator. We then start recording it’s Pop-file into our database. A Pop-file includes a tag name, start time and date, start percentage size, start number of Twitter users, how many current Twitter users tagging, and number of iterations in the incubator. It’s start percentage size will be based off comparison of one another by number of Twitter users currently using that tag. There will be a 1 minute countdown timer for this is when a user can click on each individual bubble to see it’s current recorded Pop-file before the next iteration is called. A Pop-cycle’s color will be based off how many iterations it’s sat in the incubator.

#### Once an iteration is called and the tag is no longer within the current top 20 trend bracket, POP! The lifecycle is over. That Pop cycle’s POP! time and date will then be added to it’s Pop-file which then will finally be logged into a master database of all popped Pop-cycles. The user will then be able refer back to past POP!’s in the interactive master database. This data will include tag name, start date and time, start number of Twitter users, largest number of Twitter users, and bubble images including start percentage size, largest popularity size, iteration color with number of iterations, POP! size, date and time.

## Setup/Installation Requirements

Clone or download repository:
  1. Open [this page](https://github.com/mpinaud/POP) in web browser.
  2. Under the repository name, click Clone or download.
  3. In the Clone with HTTPs section, click to copy the clone URL for the repository.
  4. Open Terminal.
  5. Change the current working directory to the location where you want the cloned directory to be made (ex. cd desktop).
  6. Type git clone, and then paste the URL you copied in Step 3. (ex. git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY).
  7. Press Enter. Your local clone will be created.
  8. Go into directory by entering cd POP in the terminal.
  9. Install all dependencies by entering npm install in the terminal.
  10. Open in your IDE.
