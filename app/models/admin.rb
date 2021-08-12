class Admin < ApplicationRecord
  has_many :design_projects
  has_many :developer_projects

  has_secure_password
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, :email, :password, presence: true
  validates :password, length: { minimum: 4 }
end
