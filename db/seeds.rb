# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Seed de usuários
User.create(name: 'Alice', email: 'alice@example.com', password: 'password123', password_confirmation: 'password123')
User.create(name: 'Bob', email: 'bob@example.com', password: 'password123', password_confirmation: 'password123')

# Seed de livros
Book.create(title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', description: 'Uma jornada épica pela Terra Média.')
Book.create(title: 'Dom Casmurro', author: 'Machado de Assis', description: 'A clássica obra de Machado de Assis sobre ciúmes e desconfiança.')
