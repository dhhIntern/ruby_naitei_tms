FactoryBot.define do
  factory :user, class: User do
    username                { Faker::Internet.unique.username(specifier: 7..9) }
    email                   { Faker::Internet.unique.email }
    password                { "123456" }
    password_confirmation   { "123456" }
    phone_number            { Faker::Number.number(12)}
    department              { Faker::Company.industry }
  end
end