One thing that you should be aware of is the way you insert line breaks into your HTML text.

## Pressing Enter does not do anything
Simply pressing the Enter key in the middle of some text does not do anything. The browser will simlpy ignore this.

```html
<p>Notice how I pressed enter here, 
   but it still appears on the same line.</p>
```

If you look in the Preview on the left, you will see that there is no new line.

## `<br>`
To insert a line break, you need to insert `<br>` into your text like this.

```html
<p>Mary had a little lamb <br> Whose fleece was white as snow.<br>And everywhere that Mary went<br>Her lamb was sure to go.</p>
```

Take a look at the Preview window to see how this looks when rendered by the browser.

## Using `<p>` tags
You could also use a `<p>` tag for each line. This achieves the same result but it is visually and structurally not the same. This is because each line is now treated as a new paragraph.

With experience, you will learn when to use `<br>` as opposed to `<p>`.

