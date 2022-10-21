# DOM - JavaScript

![](./DOM/Dom.jpg)

# Nodos

![](./DOM/Nodos.jpg)

# Tipos de Nodos

Los nodos pueden ser:  

* **Document**, *nodo raíz* del que derivan todos los demás nodos del árbol.  
* **Element**, representa cada una de las *Etiquetas XHTML*. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.  
* **Attr**, se define un nodo de este tipo para representar cada uno de los *atributos de las etiquetas XHTML*, es decir, uno por cada par atributo=valor.  
* **Text**, nodo que contiene *el texto encerrado por una etiqueta XHTML*.  
* **Comment**, representa *los comentarios incluidos en la página XHTML*.  


![](./DOM/TiposDeNodos.jpg)  

# Representacion del DOM

![](./DOM/RepresentacionDelDOM.jpg)

# Acceso al DOM

![](./DOM/AccesoDOM.jpg)

```
console.dir(document);
```
![](./DOM/document.jpg)

# Métodos de acceso al DOM

![](./DOM/MetodosAcceso.jpg)

# id
```html
<h1 id='blog'>Título del Blog</h1>
```
```javascript
const blog = document.getElementById('blog');
    console.log(blog.innerHTML);
    console.log(blog.innerText);
    console.log(blog.outerText);
    console.log(blog.textContent);
const blog = document.querySelector('#blog');
    console.log(blog.innerHTML);
    console.log(blog.innerText);
    console.log(blog.outerText);
    console.log(blog.textContent);
```
# class
```html
<h1 class='blog'>Título del Blog</h1>
<p class="blog">Párrafo del Blog</p>
```
```javascript
const blog = document.getElementsByClassName('blog');
    console.log(blog);
    console.log(blog[0]);
    console.log(blog[1]);
    console.log(blog[0].innerHTML);
    console.log(blog[0].innerText);
    console.log(blog[1].outerText);
    console.log(blog[1].textContent);
const blog = document.querySelectorAll('.blog');
    console.log(blog);
    console.log(blog[0]);
    console.log(blog[1]);
    console.log(blog[0].innerHTML);
    console.log(blog[0].innerText);
    console.log(blog[1].outerText);
    console.log(blog[1].textContent);
```
# tag
```html
<h1 id='blog' class='blog'>Título del Blog</h1>
```
```javascript
const blog = document.getElementByTagName('h1');
const blog = document.querySelector('h1');
```
# HTML data-* Attributes
```html
<h1 id='blog' class='blog' data-blog>Título del Blog</h1>
<h1 id='blog' class='blog' data-blog='titulo-blog'>Título del Blog</h1>
```
```javascript
const blog = document.querySelector('[data-blog]');
const blog = document.querySelector('[titulo-blog]');
```
