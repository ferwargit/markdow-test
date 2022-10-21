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

# .getElementById();
Retorna una referencia a un elemento por su único id.
```html
<h1 id='blog'>Título del Blog</h1>
<h1 id='blog-secundrio'>Título del Blog Secundario</h1>
```
```javascript
const blog = document.getElementById('blog');
    console.log(blog);
    console.log(blog.innerHTML);
    console.log(blog.innerText);
    console.log(blog.outerText);
    console.log(blog.textContent);
const blog = document.querySelector('#blog-secundario');
    console.log(blog);
    console.log(blog.innerHTML);
    console.log(blog.innerText);
    console.log(blog.outerText);
    console.log(blog.textContent);
```

![](./DOM/id.jpg)

# .getElementsByClassName();
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
![](./DOM/className.jpg)

# .getElementsByName();
```html
<h1 class='blog' name='blog'>Título del Blog</h1>
<h1 class="blog-secundario" name="blog">Título del Blog Secundario</h1>
<p class="blog-parrafo" name="blog">Párrafo del Blog</p>
    <script>
```
```javascript
const blog = document.getElementsByName('blog');
    console.log(blog);
    console.log(blog[0]);
    console.log(blog[1]);
    console.log(blog[2]);
    console.log(blog[0].innerHTML);
    console.log(blog[1].innerText);
    console.log(blog[2].outerText);
    console.log(blog[0].textContent);
```

![](./DOM/name.jpg)

# .getElementsByTagName();
```html
<h1 class='blog'>Título del Blog</h1>
<h1 class='blog'>Título del Blog Secundario</h1>
<p class="blog">Párrafo del Blog</p>
```
```javascript
const blog = document.getElementsByTagName('h1')[0];
const blog2 = document.getElementsByTagName('h1')[1];
    console.log(blog);
    console.log(blog2);
    console.log(blog.innerHTML);
    console.log(blog2.innerText);
    console.log(blog.outerText);
    console.log(blog2.textContent);
const blog = document.querySelectorAll('h1')[0];
const blog2 = document.querySelectorAll('h1')[1];
    console.log(blog);
    console.log(blog2);
    console.log(blog.innerHTML);
    console.log(blog2.innerText);
    console.log(blog.outerText);
    console.log(blog2.textContent);
```

![](./DOM/tagName.jpg)

# HTML data-* Attributes
```html
<h1 class='blog' data-blog>Título del Blog</h1>
<h1 class='blog' data-blog>Título del Blog-Blog</h1>
<h1 class='blog' data-blog-secundario>Título del Blog Secundario</h1>
<p class="blog">Párrafo del Blog</p>
```
```javascript
const blog = document.querySelectorAll('[data-blog]');
    console.log(blog);
    console.log(blog[0]);
    console.log(blog[1]);
    console.log(blog[0].innerHTML);
    console.log(blog[0].innerText);
    console.log(blog[1].outerText);
    console.log(blog[1].textContent);
const blog = document.querySelector('[data-blog-secundario]');
    console.log(blog);
    console.log(blog.innerHTML);
    console.log(blog.innerText);
    console.log(blog.outerText);
    console.log(blog.textContent);
```
![](./DOM/data-.jpg)

# La diferencia entre una HTMLCollection y una NodeList  

Una lista de nodos y una colección de HTML son prácticamente lo mismo.

Ambos son colecciones tipo matriz (listas) de nodos (elementos) extraídos de un documento. Se puede acceder a los nodos por números de índice. El índice comienza en 0.

Ambos tienen una propiedad de longitud que devuelve el número de elementos de la lista (colección).

Una HTMLCollection es una colección de elementos de documento .

Una lista de nodos es una colección de nodos de documentos (nodos de elementos, nodos de atributos y nodos de texto).

Se puede acceder a los elementos de HTMLCollection por su nombre, identificación o número de índice.

Solo se puede acceder a los elementos de NodeList por su número de índice.

Una HTMLCollection es siempre una colección en vivo . Ejemplo: si agrega un elemento <li> a una lista en el DOM, la lista en HTMLCollection también cambiará.

Una NodeList suele ser una colección estática . Ejemplo: si agrega un elemento <li> a una lista en el DOM, la lista en NodeList no cambiará.

Los métodos getElementsByClassName()y getElementsByTagName() devuelven una HTMLCollection activa.

El querySelectorAll()método devuelve una lista de nodos estática.

La childNodespropiedad devuelve una lista de nodos activa.