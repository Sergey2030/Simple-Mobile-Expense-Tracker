const Category = require("../models/categoryModel")

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.getAll()
        res.json(category)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.addCreate = async (req, res) => {
    try {
        const { name, image } = req.body;
        console.log(name,image);
        
        const category = await Category.create( name, image );

        if (!category) {
            return res.status(400).json({ error: "Не удалось создать категорию" });
        }

        res.status(201).json(category);
        console.log("Создана категория:", category);

    } catch (error) {
        console.error("Ошибка при создании категории:", error);
        res.status(500).json({ error: error.message });
    }
};
