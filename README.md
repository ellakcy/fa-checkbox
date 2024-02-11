# fa-checkbox

CSS and SASS library for Checkboxes and radio buttons that display fa-check icon from fontawesome.

> NOTE:
> README Under constant update.

# How to install

### Step 1: Install

```
npm i @ellakcy/fa-checkbox
```

### Step 2: Load Css

Built CSS is located at `./node_modules/dist/all.css`  in this package.

You can include it in you html like:

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
<link rel="stylesheet" type="text/css" href="node_modules/dist/all.css">
```

# Checkbox icons

## Classes:

The library allows you to use the following classes from font awesome:

* `fa-check`: https://fontawesome.com/icons/check?f=classic&s=solid
* `fa-square-check`: https://fontawesome.com/icons/square-check?f=classic&s=regular

That display the appropriate icon as its value. For the solid version of them also use the `fa-solid` class.

### For checkboxes:

As you can see place `fa-check` class to checkbox html input. Replace it with `fa-square-check` for the altenrate icon.

#### Normal
```
<input type="checkbox" class="fa-check" name="myRadioGroup">
<input type="checkbox" class="fa-square-check" name="myRadioGroup">
```

#### Solid

```
<input type="checkbox" class="fa-solid fa-check" name="myRadioGroup">
<input type="checkbox" class="fa-solid fa-square-check" name="myRadioGroup">
```

### For radio buttons:

```
<input type="radio" class="fa-solid fa-check" name="myRadioGroup">
<input type="radio" class="fa-solid fa-square-check" name="myRadioGroup">
```

Same thing as checkboxes do apply in radio buttons as well.

### For select html

Same thing does apply upon select and option:

> Only `multiple` is supported. Class `.solid` is not supported.


#### using fa-square-check
```
<select class="fa-square-check" multiple>
            <option selected>Option 1</option>
            <option selected>Option 2</option>
            <option>Option 3</option>
        </select>
```

#### using fa-check

```
<select class="fa-check" multiple>
            <option selected>Option 1</option>
            <option selected>Option 2</option>
            <option>Option 3</option>
        </select>
```

# Border and radius

Supported only fr *checkboxes* and *radio* buttons.

## Setting 1px border:

Use `border` class:

### At a checkbox:

```
<input type="checkbox" class="fa-check border" name="myRadioGroup">
```

### At a radio button
```
<input type="radio" class="fa-check border" name="myRadioGroup">
```

## Setting radius:

Use `radius` class:

### At a checkbox:

```
<input type="checkbox" class="fa-check radius" name="myRadioGroup">
```

### At a radio button
```
<input type="radio" class="fa-check radius" name="myRadioGroup">
```

# Strikethrough

## At a label section


### Using radio

#### Approach 1
```
<input id="rs1" type="radio" class="fa-check" name="myRadioGroup">
<label for="rs1" class="strike">Milk</label>
```

#### Approach 2

```
<label class="strike">
    <input id="rs6" type="radio" class="fa-check" name="myRadioGroup"> 
    Bread
</label>
```


### Using checkbox

#### Approach 1
```
<input id="rs1" type="checkbox" class="fa-check" name="myRadioGroup"><label for="rs1" class="strike">Milk</label>
```

#### Approach 2

```
<label class="strike">
    <input id="rs6" type="checkbox" class="fa-check" name="myRadioGroup"> 
    Bread
</label>
```

## Using select multiple

### Strikethroiush upon selected

At code bellow the `Option1` and `Option2` will have strikethrough as text styling

```
<select class="strike" multiple>
    <option selected>Option 1</option>
    <option selected>Option 2</option>
    <option>Option 3</option>
</select>
```

### Strikethroiush upon unselected

At code bellow the `Option3` will have strikethrough as text styling

```
<select class="strike-opposite" multiple>
    <option selected>Option 1</option>
    <option selected>Option 2</option>
    <option>Option 3</option>
</select>
```

# Example

Look at **index.html** in this project.

# LICENCE

Read **LICENCE.md** file