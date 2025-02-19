# Use the official PHP image with Apache and necessary extensions
FROM php:8.2-apache

# Install system dependencies
#RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev git unzip

RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_mysql gd

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg && docker-php-ext-install gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set Laravel's public directory as the DocumentRoot
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|' /etc/apache2/sites-available/000-default.conf

# Set the working directory
WORKDIR /var/www/html/public

# Copy the Laravel app files into the container
COPY . .

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Install PHP dependencies
RUN composer install

# Expose the port Laravel will run on
EXPOSE 80
