
npm uninstall -g @angular/cli
npm uninstall --save-dev @angular/cli

npm install -g @angular/cli@latest

ng new sample-angular --style=scss --routing true

ng serve

ng g module sample-basic
ng g component sample-basic/basic1 -m sample-basic

ng g module orders --route orders --module app.module
ng g module sample3 --route sample3 --module app.module


app.component.html poner solo esto:
<router-outlet></router-outlet>

ng add @angular/material

instalar modulo formulario normal y reactivo(FormsModule ,ReactiveFormsModule)

ejemplo:
ng build --bh /silbi5/ --deploy-url /silbi5/dir/ --output-path /home/jhon/proyectos/010-administracion_sistemas/fuentes/dev/java/administracion-sistemas-base/src/main/webapp/dir --watch

ng build --baseHref  --deploy-url web/ --output-path /media/jhon/data-mi-label/proyectos/tecnologia/spring/spring-security/poc-002-basic-security/web-security-basic/src/main/resources/static/web --watch

agregar proyecto existente a github:
https://help.github.com/es/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line

eliminar git del proyecto:
rm -rf .git


git push -u origin master -> usando essto no funcionó

git init
git add -A
git commit -m "primer commit"

git remote add origin https://github.com/nohj70/spring-security-basic.git

git push origin --force














