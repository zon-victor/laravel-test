# Laravel Test

## Task

Your task is to create an html table of data retrieved from the following API: [https://age-of-empires-2-api.herokuapp.com/docs/](https://age-of-empires-2-api.herokuapp.com/docs/).

The home page of the project should display a paginated table of the "Units", with the option of selecting to show either 10, 20 or 50 at a time. 

In the html table include the following columns: `name`, `hit_points`, `attack` & `build_time` as well as the ability to sort by these fields.

* Please note that the original API might not have the feature limit or sort, so as a developer, you will need to get around this. The solution is up to you, no CAP!

In addition to the main table of units, create a second route to display additional information for a unit when selected (e.g `/unit/{id}`). What data is displayed on this page is up to you.

to Note:

- Use Bootstrap for styling.
- Use Vue for your frontend components.
- Sorting and data retrieval must be asynchronous.

## Instructions

Please review these carefully, both the final submitted code & how well these instructions are followed will be taken into consideration.

* Clone this repository, then create your own public repository and set that as the remote (see: `git remote set-url`). This is so that other's can't see your work as they would if you were to fork the repository.
* Create a pull request to the `main` branch of your repository with your solution.
* Include some validation for parameters such as the sort and items-per-page limit.
* Include some caching for API requests.
* Give yourself approx. 4 hours to complete the task.

## Project setup

```
composer install
php artisan serve
```
